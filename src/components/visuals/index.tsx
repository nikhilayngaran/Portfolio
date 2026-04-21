"use client"

import {
  LiziaAfterObjectiveFull,
  LiziaAfterAnalysisFull,
  LiziaAfterCompetitionFull,
  LiziaRecommendationsFull,
  LiziaAfterRecommendationsFull,
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

import {
  AyngaranAfterObjectiveFull,
  AyngaranAfterAnalysisFull,
  AyngaranRecommendationsFull,
} from "./AyngaranVisuals"

import {
  PassengerAfterAnalysisFull,
  PassengerRecommendationsFull,
  PassengerAfterRecommendationsFull,
} from "./PassengerVisuals"

import {
  SK38WorkSection,
} from "./SK38Visuals"

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
      afterObjective: <LiziaAfterObjectiveFull />,
      afterAnalysis: <LiziaAfterAnalysisFull />,
      afterCompetition: <LiziaAfterCompetitionFull />,
      replaceRecommendations: <LiziaRecommendationsFull />,
      afterRecommendations: <LiziaAfterRecommendationsFull />,
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
  if (id === "first-always") {
    return {
      afterObjective: <AyngaranAfterObjectiveFull />,
      afterAnalysis: <AyngaranAfterAnalysisFull />,
      replaceRecommendations: <AyngaranRecommendationsFull />,
    }
  }
  if (id === "sk38-nettoyage") {
    return {
      replaceRecommendations: <SK38WorkSection />,
    }
  }
  if (id === "carry-the-story") {
    return {
      afterAnalysis: <PassengerAfterAnalysisFull />,
      replaceRecommendations: <PassengerRecommendationsFull />,
      afterRecommendations: <PassengerAfterRecommendationsFull />,
    }
  }
  return {}
}
