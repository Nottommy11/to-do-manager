import { proxy } from "valtio";

const store = proxy({
  tabCount: 0,
  tabList: [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
    "test9",
    "test10",
    "test11",
    "test12",
    "test13",
    "test14",
    "test15",
    "test16",
  ],
  todoCount: 0,
  todoList: [],
});

export default store;
