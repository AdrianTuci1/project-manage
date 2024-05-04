import { Group, Paper, Text, SimpleGrid } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import classes from './earnings.module.css';

const data = [
  { title: 'Revenue', value: '$13,456', diff: 34 },
  { title: 'Profit', value: '$4,145', diff: -13 },
];

export function Earnings() {
  const stats = data.map((stat) => {
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="apart">
          <div>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
              {stat.title}
            </Text>
            <Text fw={700} fz="xl">
              {stat.value}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid cols={{ base: 3, sm: 1 }} className={classes.edit}>{stats}</SimpleGrid>
    </div>
  );
}
