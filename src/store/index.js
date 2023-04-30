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
  todoList: [
    {
      TabName: "test1",
      Name: "test1",
      Description: "test1",
      Link: "https://Github.com/nottommy11",
      Completed: false,
    },
    {
      TabName: "test2",
      Name: "test2",
      Description: "test2",
      Link: "https://Github.com/nottommy11",
      Completed: false,
    },
    {
      TabName: "test3",
      Name: "test3",
      Description: "test3",
      Link: "https://Github.com/nottommy11",
      Completed: false,
    },
  ],
});

export default store;
