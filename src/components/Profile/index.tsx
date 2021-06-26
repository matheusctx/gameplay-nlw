import React, { useState } from "react";
import { View, Text, Alert } from 'react-native';
import { RectButton } from "react-native-gesture-handler";

import { useAuth } from "../../hooks/auth";

import { Avatar } from "../Avatar";
import { ModalSelection } from "../ModalSelection";

import { styles } from "./styles";

export function Profile() {
  const { user, signOut } = useAuth();
  const [openSignOutModal, setOpenSignOutModal] = useState(false);

  function handleOpenSignOut() {
    setOpenSignOutModal(true);
  }

  function handleSignOut() {
    setOpenSignOutModal(false)
    return signOut();
  }

  function handleCancel() {
    setOpenSignOutModal(false);
  }

  // function handleSignOut() {
  //   Alert.alert('Logout', 'Deseja sair do Gameplay?',
  //   [
  //     {
  //       text: 'Não',
  //       style: 'cancel',
  //     },
  //     {
  //       text: 'Sim',
  //       onPress: () => signOut()
  //     }
  //   ])
  // }

  return(
    <View style={styles.container}>
      
      <RectButton onPress={handleOpenSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            { user.firstName }
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    
      <ModalSelection
        visible={openSignOutModal}
        confirm={handleSignOut}
        cancel={handleCancel}
      />
    </View>
  )
}