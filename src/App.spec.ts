import { describe, it, expect, beforeEach } from "vitest";
import { ComponentPublicInstance } from "vue";

import { VueWrapper, shallowMount } from "@vue/test-utils";

import App from "@/App.vue";

type TestWrapper<T> = VueWrapper<ComponentPublicInstance & T>;

describe("App", () => {
  let wrapper: TestWrapper<Partial<{}>>;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it("should renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
