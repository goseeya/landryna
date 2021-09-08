import React from "react";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";
import CountryRow from "./CountryRow";
import * as mockedCountryRow from "../mock/countryRow.json";
import * as mockedCountryRowNullable from "../mock/countryRowNullable.json";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";

configure({ adapter: new Adapter() });

const createFromProps = (props) => {
  <CountryRow countryData={props} />;
};

describe("CountryRow", () => {
  describe("Snapshot", () => {
    it("should match base snapshot", () => {
      const component = create(createFromProps(mockedCountryRow));
      expect(component.toJSON()).toMatchSnapshot();
    });
    it("should render country row", () => {
      const component = shallow(<CountryRow countryData={mockedCountryRow} />);
      expect(component.find(".country-row")).toHaveLength(1);
    });
    it('should display "no data" when area is  null', () => {
      const component = render(
        <table>
          <tbody>
            <CountryRow countryData={mockedCountryRowNullable} />
          </tbody>
        </table>
      );
      expect(component.getByText(/no data/i)).toBeInTheDocument();
    });
  });
});
