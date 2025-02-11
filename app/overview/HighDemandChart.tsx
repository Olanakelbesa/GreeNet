"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "Maize", visitors: 275, fill: "var(--color-Maize)" },
  { browser: "Wheat", visitors: 200, fill: "var(--color-Wheat)" },
  { browser: "Rice", visitors: 187, fill: "var(--color-Rice)" },
  { browser: "Barley", visitors: 173, fill: "var(--color-Barley)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Maize: {
    label: "Maize",
    color: "#29BB49",
  },
  Wheat: {
    label: "Wheat",
    color: "#45DAE5",
  },
  Rice: {
    label: "Rice",
    color: "#E545AA",
  },
  Barley: {
    label: "Barley",
    color: "#A545E5",
  },
  
} satisfies ChartConfig

export function HighDemandChart() {
  return (
    <Card className="border-none shadow-md shadow-[#c1ffcf] ">
      <CardHeader>
        <CardTitle className="text-xl text-center ">Top 4 Highest Demanding Crops</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
            
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
