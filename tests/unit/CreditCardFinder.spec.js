import { mount, shallowMount } from "@vue/test-utils";
import CreditCardFinder from "@/components/CreditCardFinder";

const factory = (values = {}) => {
  return mount(CreditCardFinder, {
    data() {
      return {
        ...values,
      };
    },
  });
};

describe("CreditCardFinder", () => {
  it("renders component correctly", () => {
    const wrapper = factory();

    expect(wrapper.find(".container-text").exists()).toBeTruthy();
    expect(wrapper.find(".act-tile").exists()).toBeTruthy();

    console.log(wrapper.find(".act-tile").text());
  });

  it("goes to next step once score is picked", async () => {
    const wrapper = factory();

    await wrapper.find(".act-tile").trigger("click");

    expect(wrapper.find(".title").text()).toEqual(
      "What perks are you looking for on your next card?"
    );
  });

  it("renders two card components when you select a card type", async () => {
    const wrapper = factory({ selectedScore: "excellent", step: 2 });

    await wrapper.find("#balance_transfer").trigger("click");

    setTimeout(() => {
      expect(wrapper.find(".card-details1").exists()).toBeTruthy();
      expect(wrapper.find(".card-details2").exists()).toBeTruthy();
    }, 2000);
  });

  it("renders just one card component when you receive no second card", () => {
    const wrapper = factory({
      selectedScore: "fair",
      selectedCardType: "low_interest",
      step: 2,
    });

    setTimeout(() => {
      expect(wrapper.find(".card-details1").exists()).toBeTruthy();
      expect(wrapper.find(".card-details2").exists()).toBeFalsy();
    }, 2000);
  });

  it("renders an error message when you receive no cards from API", () => {
    const wrapper = factory({
      selectedScore: "bad",
      selectedCardType: "balance_transfer",
      step: 2,
    });

    setTimeout(() => {
      expect(wrapper.find(".card-error-text").exists()).toBeTruthy();
      expect(wrapper.find(".card-details1").exists()).toBeFalsy();
      expect(wrapper.find(".card-details2").exists()).toBeFalsy();
    }, 2000);
  });

  it("renders an error message when you cannot reach the API", () => {
    const wrapper = factory({
      selectedScore: "bad",
      selectedCardType: "balance_transfer",
      error: true,
      step: 2,
    });

    setTimeout(() => {
      expect(wrapper.find(".card-error-text").exists()).toBeTruthy();
      expect(wrapper.find(".card-details1").exists()).toBeFalsy();
      expect(wrapper.find(".card-details2").exists()).toBeFalsy();
    }, 2000);
  });
});
