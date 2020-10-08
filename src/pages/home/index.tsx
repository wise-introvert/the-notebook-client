import * as React from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { AiOutlineDownload } from "react-icons/ai";
import { isEmpty } from "lodash";

import styles from "./styles.module.scss";
import { GetCourseQuery, RefreshMutation } from "../../api";
import { RouteComponentProps } from "react-router";
import { Card, Navbar, Spinner } from "../../components";
import error from "../../lib/assets/images/error.svg";

type HomePageProps = RouteComponentProps<{}>;
export const HomePage: React.FunctionComponent<HomePageProps> = (): React.ReactElement => {
  const [
    getCourses,
    { data: coursesData, loading: coursesLoading, error: coursesError }
  ] = useLazyQuery(GetCourseQuery);
  const [
    refresh,
    { data: refreshData, loading: refreshLoading, error: refreshError }
  ] = useMutation(RefreshMutation);

  React.useEffect(() => {
    getCourses();
  }, []);

  const getContent = (): React.ReactElement => {
    if (coursesLoading || refreshLoading) {
      return (
        <div className={styles.spinnerContainer}>
          <Spinner color={"#000"} />
        </div>
      );
    }

    if (coursesError || refreshError) {
      if (coursesError?.message.toLowerCase().includes("access denied")) {
        refresh().then(() => getCourses());
      }
      return (
        <div className={styles.spinnerContainer}>
          <img className={styles.error} src={error} />
        </div>
      );
    }

    return (
      <div className={styles.content}>
        {isEmpty(coursesData) ? (
          <div className={styles.spinnerContainer}>
            <img className={styles.error} src={error} />
          </div>
        ) : (
          coursesData.courses.map((course: any) => (
            <Card onClick={() => {}} className={styles.card}>
              <span className={styles.title}>{course.name}</span>
            </Card>
          ))
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Navbar />
      {getContent()}
    </div>
  );
};
