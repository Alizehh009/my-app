'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Card from '../Components/card'
import Link from 'next/link';


export default function HomePage({ chartConfigs, cardProps }) {
  const { data: session, status } = useSession()

  return (
    <div>
      <div className="container">
        <div className="header flex justify-between items-center">
          <h1>Supply Chain</h1>
          <Link href="/admin">
    <button className="add-chart-btn"> Add Chart</button>
  </Link>

          <div className="flex gap-4 items-center">
            {session ? (
              <>
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span>{session.user.name}</span>
                <button onClick={() => signOut()}>Logout</button>
              </>
            ) : (
              <button onClick={() => signIn()}>Login</button>
            )}
          </div>
        </div>

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
