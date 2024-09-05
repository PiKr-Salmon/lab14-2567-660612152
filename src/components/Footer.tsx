import { FooterProps } from "@lib/types";
import { Text } from "@mantine/core";

export default function Footer(props : FooterProps) {
  return (
    <>
      <Text ta="center" my="sm" c="dimmed" size="md">
      Copyright ©{props.year} {props.fullName} {props.studentId}
      </Text>
    </>
  );
}
