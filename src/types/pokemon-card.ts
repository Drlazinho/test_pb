export interface PokemonCardProps {
    id: string
    name: string
    supertype: string
    subtypes?: string[]
    level?: string
    hp: string
    types: string[]
    evolvesFrom?: string
    abilities?: AbilityProps[]
    attacks?: AttackProps[]
    weaknesses?: WeaknessProps[]
    resistances?: ResistanceProps[]
    retreatCost: string[]
    convertedRetreatCost: number
    set: SetProps
    number: string
    artist: string
    rarity: string
    flavorText: string
    nationalPokedexNumbers: number[]
    legalities: { [format: string]: string } 
    images: { small: string; large: string }
    tcgplayer?: TcgplayerPricesProps 
    cardmarket?: CardmarketPricesProps 
}

export interface AbilityProps {
    name: string
    text: string
    type: string
}

export interface AttackProps {
    name: string
    cost: string[]
    convertedEnergyCost: number
    damage: string
    text?: string
}

export interface WeaknessProps {
    type: string
    value: string
}

export interface ResistanceProps {
    type: string
    value: string
}

export interface SetProps {
    id: string
    name: string
    series: string
    printedTotal: number
    total: number
    legalities: { [format: string]: string }
    ptcgoCode: string
    releaseDate: string
    updatedAt: string
    images: { symbol: string; logo: string }
}

export interface TcgplayerPricesProps {
    url: string
    updatedAt: string
    prices: {
        holofoil: {
            low: number
            mid: number
            high: number
            market: number
            directLow: number | null
        }
        reverseHolofoil?: { 
            low: number
            mid: number
            high: number
            market: number
            directLow: number | null
        }
    }
}

export interface CardmarketPricesProps {
    url: string
    updatedAt: string
    prices: {
        averageSellPrice: number
        lowPrice: number
        trendPrice: number
        germanProLow: number
        suggestedPrice: number
        reverseHoloSell?: number 
        reverseHoloLow?: number 
        reverseHoloTrend?: number
        lowPriceExPlus: number
        avg1: number
        avg7: number
        avg30: number
        reverseHoloAvg1?: number 
        reverseHoloAvg7?: number 
        reverseHoloAvg30?: number
    }
}