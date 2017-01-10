import { SurveymakerPage } from './app.po';

describe('surveymaker App', function() {
  let page: SurveymakerPage;

  beforeEach(() => {
    page = new SurveymakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
