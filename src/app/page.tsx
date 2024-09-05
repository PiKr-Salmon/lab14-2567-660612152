"use client";
import { Container, Title } from "@mantine/core";
import Footer from "@components/Footer";
import Review from "@components/Review";
import Reviewver from "@components/Reviewver";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Review/>
      <Reviewver/>
      <Footer year="2024" fullName="Piyawat Krueaprasoet" studentId="660612152"/>
    </Container>
  );
}
