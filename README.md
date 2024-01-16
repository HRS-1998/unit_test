 ### 单元级别的功能测试 
 ##### 常用api   
   -  test  | it
      - it ——> BDD 行为驱动开发  （在TDD测试驱动开发的基础上做了延伸和扩展）在BDD格式中  it  should  XXX  XXX 其中 test in jest   test|it in vitest
  <br>
   -  describe  将相同行为的测试放到一起
      - describe.skip("add" ,()=>{}) //跳过内部的测试suit;
      - describe.only("add",()=>{})  //只执行add内部的测试suit
      - describe.todo('reverse',()=>{}) //功能案例
  <br>
   - expect 断言 
       - toBe           expect(2).toBe(2)  全等概念  
       - toEqual        expect('sss').toEqual('ss') 一般用于两个对象之间比较
       - toBeTruthy     expect(1).toBeTruthy()   检测真值
       - toBeFalsy      expect('').toBeTruthy() 检测假值
       - toContain      expect([1,2]).toCotain(1)  检测数组/字符串内包含
       - toThrow        expect(()=>{throw new Error()}).toThrow('这是错误内容')   是否抛出错误，以及错误内容

下面函数的执行顺序  beforeAll beforeEach test  afterEach afterAll

 - beforeAll
 - beforeEach
 - 执行测试代码
 - afterEach
 - afterAll