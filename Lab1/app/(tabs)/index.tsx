import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // Khai báo biến text
  const name = 'Lê Văn Tuấn';
  const studentId = 'PH48359';

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Họ tên: {name}</ThemedText>
      <ThemedText type="subtitle">MSSV: {studentId}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
});
