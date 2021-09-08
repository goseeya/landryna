import React from "react";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";
import Summary from "./Summary";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const mockedSummary = {
  avgPop: 3455355,
  smallestCountry: "Cyprus",
  biggestCountry: "Poland",
};

const createFromProps = (props) => {
  <Summary summaryData={props} />;
};

describe("Summary", () => {
  describe("Snapshot", () => {
    it("should match base snapshot", () => {
      const component = create(createFromProps(mockedSummary));
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
