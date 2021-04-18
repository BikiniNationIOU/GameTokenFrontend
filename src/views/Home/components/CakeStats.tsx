import React from 'react'
import { Card, CardBody, Heading, Text } from '@gametoken/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK } from 'config'
import CardValue from './CardValue'


const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const perBlock = CAKE_PER_BLOCK.toNumber()
  return (
    <StyledCakeStats> 
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'GME Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total GME Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total GME Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New GME/block')}</Text>
          <CardValue fontSize="14px" decimals={3} value={perBlock} />
        </Row> 
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
