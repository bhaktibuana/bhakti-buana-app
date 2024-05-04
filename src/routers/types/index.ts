import { Component } from "vue";
import { RouteRecordRaw } from "vue-router";

export type T_Meta = RouteRecordRaw["meta"] & {
  isPrivatePage: boolean;
  isAuthPage: boolean;
  layout: Component;
};

export type T_Routes = RouteRecordRaw & {
  meta: T_Meta;
};
