import { useLazyQuery, gql, useMutation } from "@apollo/client";
import * as React from "react";
import { RouteComponentProps } from "react-router";

import { RefreshMutation } from "../../api";
import { Card, Navbar } from "../../components";
import { Course, Department, Subject } from "./fake.data";
import styles from "./styles.module.scss";
import logo from "../../lib/assets/images/logo.svg";
import errorSVG from "../../lib/assets/images/error.svg";

type Selection = Department[] | Course[] | Subject[] | Document[];
type All = Department | Course | Subject | Document;

type HomePageProps = RouteComponentProps<{}>;
export const HomePage: React.FunctionComponent<HomePageProps> = (): React.ReactElement => {
  const [l, setL] = React.useState<boolean>(true);
  const [refresh, { loading: refreshLoading }] = useMutation(RefreshMutation);
  const [history, setHistory] = React.useState<Selection[]>([]);
  const [getData, { data, loading, error }] = useLazyQuery(gql`
    query get {
      courses {
        id
        name
        subjects {
          id
          name
          documents {
            id
            name
            url
          }
        }
      }
    }
  `);
  const [selection, setSelection] = React.useState<Selection>({} as Selection);

  React.useEffect(() => {
    setL(true);
    getData();
  }, []);

  React.useEffect(() => {
    console.log("error: ", error?.message);
    setL(true);
    if (error?.message.toLowerCase().includes("access")) {
      refresh().then(() => getData());
    }
  }, [error]);

  React.useEffect(() => {
    setHistory((oldHistory: any) => [...oldHistory, selection]);
    console.log(history);
  }, [selection]);

  React.useEffect(() => {
    console.log("data: ", data);
    if (data) {
      setL(false);
      window.scrollTo(0, 0);
      setSelection(data.courses);
    }
  }, [data]);

  const extractArray = (obj: All): Selection | null => {
    const re: RegExp = new RegExp(
      /(subjects)|(documents)|(departments)|(courses)/gi
    );
    for (const key in obj) {
      if (re.test(key)) return (obj as any)[key];
    }
    return null;
  };

  const getTitle = (current: any): string => {
    return current.__typename;
  };

  if (l || !selection) {
    return <div>Loading</div>;
  }

  if (refreshLoading || loading || !data || l) {
    return <div>loading</div>;
  }

  if (error) {
    return (
      <div className={styles.container}>
        <img src={errorSVG} className={styles.error} />
      </div>
    );
  }

  return false ? (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  ) : (
    <div className={styles.container}>
      <Navbar logo={logo} />
      <div style={{ paddingTop: "64px" }}>
        <span className={`title ${styles.heading}`}>
          {getTitle(selection[0])}
        </span>
        <div className={styles.content}>
          {(selection as any[]).map((s: any) => (
            <Card
              key={s.id}
              onClick={() => {
                if ("url" in s) {
                  window.open(s.url, "_blank");
                } else {
                  setSelection(extractArray(s) as any);
                }
              }}
              className={styles.card}
            >
              <div className={styles.title}>{s.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
