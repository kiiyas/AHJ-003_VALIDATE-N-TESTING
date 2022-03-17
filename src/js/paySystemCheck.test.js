import PaySystemCheck from './paySystemCheck';

const visaCheck = new PaySystemCheck('4532741546675545');
const masterCheck = new PaySystemCheck('5241787640994067');
const amexCheck = new PaySystemCheck('340372949188439');
const discoverCheck = new PaySystemCheck('6011308412087265');
const mirCheck = new PaySystemCheck('2202200223948454');

test('Class Validate should validate inputed value', () => {
  expect(visaCheck.getSystem()).toBe('visa');
  expect(masterCheck.getSystem()).toBe('master');
  expect(amexCheck.getSystem()).toBe('amex');
  expect(discoverCheck.getSystem()).toBe('discover');
  expect(mirCheck.getSystem()).toBe('mir');
});
