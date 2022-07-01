import React from "react";
import Loading from "./loading";

type IProps = {
  loading: boolean;
  Component: React.ReactElement;
};

const IsLoading = ({ loading, Component }: IProps) => {
  if (loading) return <Loading />;

  return Component;
};

export default IsLoading;
