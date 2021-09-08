import React from "react";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";
import LanguageRow from "./LanguageRow";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockedProps = {
  languageCode: 'en',
  languageName: 'English'
}

const createFromProps = (props) => {
  <LanguageRow languageCode={props.languageCode} languageName={props.languageName} />;
};

describe("LanguageRow", () => {
  describe("Snapshot", () => {
    it("should match base snapshot", () => {
      const component = create(createFromProps(mockedProps));
      expect(component.toJSON()).toMatchSnapshot();
    });
    it("should render language row", () => {
      const component = shallow(<LanguageRow languageCode={mockedProps.languageCode} languageName={mockedProps.languageName} />);
      expect(component.find(".language-row")).toHaveLength(1);
    });
  });
});

