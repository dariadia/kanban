import { Column, Task } from "../../types/board"

export const defaultCols: Column[] = [
  {
    selfUuid: "idea",
    title: "Idea",
  },
  {
    selfUuid: "todo",
    title: "Todo",
  },
  {
    selfUuid: "in-progress",
    title: "In progress",
  },
  {
    selfUuid: "done",
    title: "Done",
  },
]

export const defaultTasks: Task[] = [
  {
    selfUuid: "jdofs32",
    columnUuid: "idea",
    inner: "Offer users a discount for inviting a friend",
  },
  {
    selfUuid: "jd9dsfs32",
    columnUuid: "idea",
    inner: "Offer users 'achieves' 🏆 which they can share on social media",
  },
  {
    selfUuid: "fdsj32",
    columnUuid: "todo",
    inner: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    selfUuid: "fsdjk324",
    columnUuid: "todo",
    inner:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae iaculis augue. Proin mattis gravida sem, sed varius ipsum eleifend pellentesque.",
  },
  {
    selfUuid: "fsdm23k",
    columnUuid: "in-progress",
    inner: "Morbi quam leo, congue in tortor at, cursus vulputate libero. Donec vitae ex metus. Duis aliquam euismod enim eget condimentum.",
  },
  {
    selfUuid: "kdsp32",
    columnUuid: "in-progress",
    inner: "Nam est quam, cursus quis convallis ac, consequat quis urna.",
  },
  {
    selfUuid: "f240jms",
    columnUuid: "done",
    inner: "Nulla maximus elit pharetra justo condimentum facilisis.",
  },
  {
    selfUuid: "masp32",
    columnUuid: "done",
    inner: "Vestibulum ante.",
  },
  {
    selfUuid: "esdefnk23l",
    columnUuid: "done",
    inner: "Ipsum primis in faucibus orci.",
  },
  {
    selfUuid: "gsfpq3",
    columnUuid: "idea",
    inner: "Luctus et ultrices.",
  },
  {
    selfUuid: "mrp23o",
    columnUuid: "todo",
    inner: "Posuere cubilia curae.",
  },
  {
    selfUuid: "fm230ke",
    columnUuid: "todo",
    inner: "Donec accumsan metus neque.",
  },
  {
    selfUuid: "dsj20kf",
    columnUuid: "todo",
    inner: "Vitae convallis odio mattis ac. Quisque quis enim rhoncus urna lobortis maximus a vel arcu.",
  },
  {
    selfUuid: "frsjk232l",
    columnUuid: "idea",
    inner: "Sed non auctor ante. Maecenas pharetra enim dapibus, pulvinar tellus nec, feugiat magna. Cras condimentum quis dolor at vestibulum. Pellentesque tellus sem, maximus nec efficitur at, vehicula at enim. Vestibulum semper egestas lacus eget lacinia. Donec commodo euismod justo. Quisque turpis ipsum, auctor vel arcu eget, varius pretium turpis.",
  },
  {
    selfUuid: "sdfk45",
    columnUuid: "in-progress",
    inner: "Design and implement responsive UI",
  },
]
