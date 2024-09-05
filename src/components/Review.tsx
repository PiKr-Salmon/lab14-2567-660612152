"use client"
import React from 'react'
import { Title, Rating, Textarea, Button } from '@mantine/core'
import { useState } from 'react'


export default function Review() { 
  const [rating, setRating] = useState(0)

  return (
    <>
        <Title order={4} mt="sm" mb="xs" >Your rating <Rating size={30}  value={rating} onChange={setRating} /></Title>
        <Textarea mb="sm" label="Your review" placeholder='Do you enjoy eating?' autosize minRows={3.25} maxRows={3.5}  />
        <Button variant="filled" color="orange">Submit Review</Button>
    </>
  )
}
