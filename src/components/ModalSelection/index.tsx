import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';

import { Background } from '../Background';
import { theme } from '../../global/styles/theme';

type Props = ModalProps & {
  confirm: () => void | Promise<void>;
  cancel: () => void;
}

export function ModalSelection({ confirm, cancel, ...rest }: Props){
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={cancel}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.content}>
                <View style={styles.header}>
                  <Text style={styles.title}>
                    Deseja sair do 
                    <Text style={{fontFamily: theme.fonts.title700}}> Game
                      <Text style={{color: theme.colors.primary}}>
                        Play
                        <Text style={{color: theme.colors.heading}}>
                        ?
                        </Text>
                      </Text>
                    </Text>
                  </Text>
                </View>

                <View style={styles.footer}>
                  <View style={styles.cancel}>
                      <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={cancel}
                      >
                        <Text style={styles.textButton}>Não</Text>
                      </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={() => confirm()}
                  >
                    <Text style={styles.textButton}>Sim</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}