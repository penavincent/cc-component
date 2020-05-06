import { mount, shallowMount } from "@vue/test-utils";
import CreditCardFinder from "@/components/CreditCardFinder";

describe("CreditCardFinder", () => {
  const wrapper = mount(CreditCardFinder);

  it("renders correctly", () => {
    expect(wrapper.html()).toContain(
      '<h1 class="title">Looking for a new Credit Card? Let us help you out!</h1>'
    );
  });

  it("Choosing a score should update the chosenScore", () => {
    expect(wrapper.vm.chosenScore).toBe(null);
    const button = wrapper.find("");
  });
});
