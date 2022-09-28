import styled from "styled-components/native";
import { Camera } from "expo-camera";

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CameraButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colours.bg.primary};
  width: ${({ theme }) => theme.sizes.xl};
  height: ${({ theme }) => theme.sizes.xl};
  border-radius: ${({ theme }) => theme.sizes.xl};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5%;
`;

export const CameraDot = styled.View`
  width: ${({ theme }) => theme.sizes.lg};
  height: ${({ theme }) => theme.sizes.lg};
  border-radius: ${({ theme }) => theme.sizes.xl};
  border: 2px solid ${({ theme }) => theme.colours.ui.primary};
`;
