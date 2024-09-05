import React from 'react'
import { Divider, Title, Rating, Text, Group, Pagination } from '@mantine/core'

export default function Reviewver() {
  return (
    <>
        <Divider my="sm"/>
        <Group mt="sm" mb={2} justify='center'>
            <Title order={4} ta="center">Elon Musk </Title><Rating value={5} fractions={2} readOnly />
        </Group>
            <Text c="dimmed" fz={15} ta='center'>Best pizza in this world. I give you X score.</Text>
        <Divider my="sm"/>
        <Group mt="sm" mb={2} justify='center' >
            <Title order={4} >Mark Zuck </Title><Rating value={4} fractions={2} readOnly />
        </Group>
            <Text c="dimmed" fz={15} ta='center'>My favourite part is pepperoni</Text>
        <Pagination.Root my="md" total={20} color='orange'>
            <Group gap={8} justify="center">
                <Pagination.Previous />
                <Pagination.Items />
                <Pagination.Next />
            </Group>
        </Pagination.Root>
    </>
  )
}
