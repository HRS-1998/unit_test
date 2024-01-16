// test  it
//expect toBe
//test.only
//提示是否通过/报错
//beforeAll beforeEach  afterAll afterEach
//describe
//自动执行所有测试脚本 *.spec.ts

const tests = [];
const onlys = [];
const beforeAlls = [];
const beforeEachs = [];
const afterAlls = [];
const afterEachs = [];

export function test(name, callback) {
  tests.push({ name, callback });
}

test.only = (name, callback) => {
  onlys.push({ name, callback });
};

export const it = test;

export function expect(actual) {
  return {
    toBe(expected) {
      if (expected === actual) {
        //    console.log('ok');
      } else {
        throw new Error(`fail actual: ${actual}, expected: ${expected}`);
      }
    },
  };
}

export function beforeAll(callback) {
  beforeAlls.push(callback);
}

export function beforeEach(callback) {
  beforeEachs.push(callback);
}
export function afterAll(callback) {
  afterAlls.push(callback);
}

export function afterEach(callback) {
  afterEachs.push(callback);
}

export function describe(name, callback) {
  callback();
}

//run 调用
export function run() {
  for (const beforeAllsItem of beforeAlls) {
    beforeAllsItem();
  }
  const suit = onlys.length > 0 ? onlys : tests;
  for (const test of suit) {
    for (const testbefore of beforeEachs) {
      testbefore();
    }
    try {
      test.callback();
      console.log(`ok: ${test.name}`);
    } catch (e) {
      console.log(e);
    }
    afterEachs.forEach((afterEachsCallback) => {
      afterEachsCallback();
    });
  }
  afterAlls.forEach((afterAllsCallback) => {
    afterAllsCallback();
  });
}
