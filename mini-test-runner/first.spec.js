import {
  expect,
  it,
  test,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe,
} from "./core.js";

beforeAll(() => {
  console.log("before all");
});

beforeEach(() => {
  console.log("test case before");
});
test("first test case", () => {
  console.log("first test case");
  expect(2).toBe(2);
});

it("second test case", () => {
  console.log("second test case");
});

// test.only('only test case', () => {
//   console.log('only this log');
// })

// it("third test case", () => {
//   console.log("third test case");
// });

describe("sameType", () => {
  test("test_describe_1", () => {
    console.log("test_describe_1");
  });
  test("test_describe_2", () => {
    console.log("test_describe_2");
  });
  test("test_describe_3", () => {
    console.log("test_describe_3");
  });
});

afterAll(() => {
  console.log("after all");
});

afterEach(() => {
  console.log("after each");
});

// run();
