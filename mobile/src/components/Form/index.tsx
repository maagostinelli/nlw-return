import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { captureScreen } from 'react-native-view-shot';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

import { FeedbackType } from '../../components/Widget';
import { ScreenshotButton } from '../../components/ScreenshotButton';
import { Button } from '../Button';

interface Props {
  feedbackType: FeedbackType
}

export function Form({ feedbackType }: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    })
    .then( uri => setScreenshot(uri))
    .catch(error => console.log(error));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary}/>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Image 
                source={feedbackTypeInfo.image}
                style={styles.image}
              />
              <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
            </View>
        </View>
        <View>
          <TextInput
            multiline
            style={styles.input}
            placeholder="Queremos te ouvir. O que você gostaria de nos dizer?"
            placeholderTextColor={theme.colors.text_secondary}
          />
        </View>
        <View style={styles.footer}>
          <ScreenshotButton 
            screenshot={screenshot}
            onTakeShot={handleScreenshot}
            onRemoveShot={handleScreenshotRemove}
          />
          <Button
            isLoading={false}
          />
        </View>
    </View>
  );
}