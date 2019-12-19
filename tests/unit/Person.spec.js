import { shallowMount } from "@vue/test-utils";
import Person from "@/components/Person";

describe("Person.vue", () => {
  test("Renders props.person.name", () => {
    const person = {
      name: "Luke"
    };
    const wrapper = shallowMount(Person, {
      propsData: {
        person
      }
    });
    expect(wrapper.text()).toContain(person.name);
  });
  test("render props.person.height", () => {
    const person = {
      height: "200"
    };
    const wrapper = shallowMount(Person, {
      propsData: {
        person
      }
    });
    expect(wrapper.text()).toContain(person.height);
  });
});
