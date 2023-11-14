// import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {primary, secondary} from '../../Stylings/Colors';
import styles from './TextInput.Styles';
// import useTextInputStyles from './your-path-to-styles'; // Replace with the actual path
import {Medium} from '../../Stylings/Font.Family';

const Text_Input = ({
  placeholder,
  value,
  width,
  maxLength,
  onChangeText,
  secureTextEntry,
  keyboardType,
  icon,
  backgroundColor,
  editable,
  disabled,
  defaultValue,
  error,
  getCode,
  error2,
  input_Title,
  error3,
  onSelect,
  onFocus,
  IsFocus,
  onBlur,
}) => {
  // const styles = useTextInputStyles(); // Assuming you have a style file and hook for TextInput

  return (
    <View>
      {IsFocus == true ? (
        <View>
          <Text style={styles.title}>{input_Title}</Text>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={secondary}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            keyboardType={keyboardType}
            defaultValue={defaultValue}
            editable={editable}
            secureTextEntry={secureTextEntry}
            onFocus={onFocus}
            maxLength={maxLength}
            style={[styles.textInput, {borderBottomColor: primary}]}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>{input_Title}</Text>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={secondary}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            keyboardType={keyboardType}
            defaultValue={defaultValue}
            editable={editable}
            secureTextEntry={secureTextEntry}
            onFocus={onFocus}
            maxLength={maxLength}
            style={[
              styles.textInput,
              {
                borderBottomColor:
                  error || error2 || error3 ? 'red' : '#D9D6D6',
              },
            ]}
          />
        </View>
      )}
    </View>
  );
};

export default Text_Input;
