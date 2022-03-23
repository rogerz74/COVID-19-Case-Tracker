import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function InfoBox({title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
          {/*Title  */}
          <Typography className="infoBox__title" color="textSecondary">
              {title}
          </Typography>

          {/*Nujmber of cases */}
          <h2 className="infoBox__cases">{cases}</h2>

          {/*1.2M total cases  */}
          <Typography className="infoBox__total"color = "textSecondary">
              {total} Total
          </Typography>


      </CardContent>
    </Card>
  )
}

export default InfoBox
