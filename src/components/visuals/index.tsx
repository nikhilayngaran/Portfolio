"use client"

import {
  LiziaSegmentationMatrix,
  LiziaRevenueChart,
  LiziaCompetitionMap,
  LiziaStrategyCards,
  LiziaLineExtension,
} from "./LiziaVisuals"

import {
  LindtCarbonAudit,
  LindtPillarCards,
  LindtBenchmarkStrip,
} from "./LindtVisuals"

import {
  OneBoardSWOTMatrix,
  OneBoardRecommendationCards,
  OneBoardAfterRecommendations,
} from "./OneBoardVisuals"

export type ProjectVisualSlots = {
  afterObjective?: React.ReactNode
  afterAnalysis?: React.ReactNode
  afterCompetition?: React.ReactNode
  replaceRecommendations?: React.ReactNode
  afterRecommendations?: React.ReactNode
}

export function getProjectVisuals(id: string): ProjectVisualSlots {
  if (id === "light-the-way") {
    return {
      afterObjective: <LiziaSegmentationMatrix />,
      afterAnalysis: <LiziaRevenueChart />,
      afterCompetition: <LiziaCompetitionMap />,
      replaceRecommendations: <LiziaStrategyCards />,
      afterRecommendations: <LiziaLineExtension />,
    }
  }
  if (id === "board-to-scale") {
    return {
      afterAnalysis: <OneBoardSWOTMatrix />,
      replaceRecommendations: <OneBoardRecommendationCards />,
      afterRecommendations: <OneBoardAfterRecommendations />,
    }
  }
  if (id === "greening-the-feed") {
    return {
      afterAnalysis: <LindtCarbonAudit />,
      replaceRecommendations: <LindtPillarCards />,
      afterRecommendations: <LindtBenchmarkStrip />,
    }
  }
  return {}
}
