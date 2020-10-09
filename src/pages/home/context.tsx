import * as React from "react";
import { QueryLazyOptions, ApolloError } from "@apollo/client";

export enum SelectionName {
  COURSE = "COURSE",
  SUBJECT = "COURSE"
}

export type Selection = {
  name: SelectionName;
  id?: string;
};

export type HomeContextState = {
  selection: Selection;
  setSelection: (selection: Selection) => any;
  getCoursesQuery: (
    options?: QueryLazyOptions<Record<string, any>> | undefined
  ) => any;
  getCoursesQueryData: any;
  getCoursesQueryLoading: boolean;
  getCoursesQueryError: ApolloError | undefined;
  getCoursesWithSubjectsQuery: (
    options?: QueryLazyOptions<Record<string, any>> | undefined
  ) => any;
  getCoursesWithSubjectsQueryData: any;
  getCoursesWithSubjectsQueryLoading: boolean;
  getCoursesWithSubjectsQueryError: ApolloError | undefined;
  getSubjectsQuery: (
    options?: QueryLazyOptions<Record<string, any>> | undefined
  ) => any;
  getSubjectsQueryData: any;
  getSubjectsQueryLoading: boolean;
  getSubjectsQueryError: ApolloError | undefined;
  getSubjectsWithDocumentsQuery: (
    options?: QueryLazyOptions<Record<string, any>> | undefined
  ) => any;
  getSubjectsWithDocumentsQueryData: any;
  getSubjectsWithDocumentsQueryLoading: boolean;
  getSubjectsWithDocumentsQueryError: ApolloError | undefined;
};

export const HomeContext: React.Context<HomeContextState> = React.createContext<
  HomeContextState
>({} as HomeContextState);
