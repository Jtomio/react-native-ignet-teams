import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}



export function Header({ showBackButton = false }: Props) {

  const navigation = useNavigation()

  //Groups > NewGroup > Players
  //Nesse caso utilizamos o .navigate e não o goBack para retorna para primeira página.
  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>

  )
}