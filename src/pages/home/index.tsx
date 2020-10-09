import * as React from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { isEmpty } from "lodash";

import styles from "./styles.module.scss";
import {
  GetCoursesQuery,
  RefreshMutation,
  GetCoursesWithSubjectsQuery,
  GetSubjectsQuery,
  GetSubjectsWithDocumentsQuery
} from "../../api";
import { RouteComponentProps } from "react-router";
import { Card, Navbar, Spinner } from "../../components";
import error from "../../lib/assets/images/error.svg";
import { HomeContext, HomeContextState, Selection } from "./context";

type HomePageProps = RouteComponentProps<{}>;
export const HomePage: React.FunctionComponent<HomePageProps> = (): React.ReactElement => {
  const [selection, setSelection] = React.useState<Selection>({} as Selection);
  const [
    getCoursesQuery,
    {
      data: getCoursesQueryData,
      error: getCoursesQueryError,
      loading: getCoursesQueryLoading
    }
  ] = useLazyQuery(GetCoursesQuery);
  const [
    getCoursesWithSubjectsQuery,
    {
      data: getCoursesWithSubjectsQueryData,
      error: getCoursesWithSubjectsQueryError,
      loading: getCoursesWithSubjectsQueryLoading
    }
  ] = useLazyQuery(GetCoursesWithSubjectsQuery);
  const [
    getSubjectsQuery,
    {
      data: getSubjectsQueryData,
      error: getSubjectsQueryError,
      loading: getSubjectsQueryLoading
    }
  ] = useLazyQuery(GetSubjectsQuery);
  const [
    getSubjectsWithDocumentsQuery,
    {
      data: getSubjectsWithDocumentsQueryData,
      error: getSubjectsWithDocumentsQueryError,
      loading: getSubjectsWithDocumentsQueryLoading
    }
  ] = useLazyQuery(GetSubjectsWithDocumentsQuery);

  const contextValue: HomeContextState = {
    selection,
    setSelection,
    getCoursesQuery,
    getCoursesQueryData,
    getCoursesQueryLoading,
    getCoursesQueryError,
    getCoursesWithSubjectsQuery,
    getCoursesWithSubjectsQueryData,
    getCoursesWithSubjectsQueryLoading,
    getCoursesWithSubjectsQueryError,
    getSubjectsQuery,
    getSubjectsQueryData,
    getSubjectsQueryLoading,
    getSubjectsQueryError,
    getSubjectsWithDocumentsQuery,
    getSubjectsWithDocumentsQueryData,
    getSubjectsWithDocumentsQueryLoading,
    getSubjectsWithDocumentsQueryError
  };

  return (
    <HomeContext.Provider value={contextValue}>
      <pre>{JSON.stringify(contextValue, null, 2)}</pre>
    </HomeContext.Provider>
  );
};
/*
export const HomePage: React.FunctionComponent<HomePageProps> = (): React.ReactElement => {
  const [
    getCourses,
    { data: coursesData, loading: coursesLoading, error: coursesError }
  ] = useLazyQuery(GetCoursesQuery);
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
 */
