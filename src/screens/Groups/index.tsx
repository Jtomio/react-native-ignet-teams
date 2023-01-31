
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { GroupCard } from '@components/GoupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles'
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';


export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()


  function handleNewGroup() {
    navigation.navigate('new')
  }

  return (
    <Container >
      <Header />
      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Que tal cadastrar nova turma?"
          />)}
      />

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}
