'use client'

import { useSession } from 'next-auth/react'
import Card from '../Components/card'
import Link from 'next/link'
import Header from '../Components/header'

export default function HomePage({ chartConfigs, cardProps }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="grid">
          {cardProps.map((card) => {
            const chartDataOption = chartConfigs.find(c => c.id === card.chartId)
            return (
              <div key={card.key}>
                <Card
                  title={card.title}
                  value={card.value}
                  subValue={card.subValue}
                  chartId={card.chartId}
                  imageUrl={card.imageUrl}
                  stats={card.stats}
                  isChart4={card.isChart4}
                  isCentered={card.isCentered}
                  chartDataOption={chartDataOption}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
