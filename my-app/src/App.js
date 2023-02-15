import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 2],
  ["Studies", 5],
  ["Sleep", 7],
];
export const options = {
  title: "My Daily Activities",
};

const charts = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  )
}
export default charts