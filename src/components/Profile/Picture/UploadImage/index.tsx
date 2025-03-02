import React, { useEffect, useState } from 'react';
import { Upload, UploadProps, App } from 'antd';
import ImgCrop from 'antd-img-crop';
import * as S from './upload-styles';
import Dev from '@/assets/images/login/dev-product.png';
import { useChangeImage } from '@/api/service/user/actions';
import { getCookie } from '@/utils';
import { useAuth } from '@/context/auth';

// Função para converter arquivo para Base64
const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const ImageUpload: React.FC = () => {
  const { message } = App.useApp();
  const [imageSrc, setImageSrc] = useState(Dev);
  const { isSaving, handleFormSubmit } = useChangeImage();
  const { user } = useAuth();

  useEffect(() => {
    const sessionData = getCookie('sessionData');
    if (sessionData) {
      try {
        const parsedData = JSON.parse(sessionData);
        setImageSrc(parsedData.UrlImage || Dev);
      } catch {
        setImageSrc(Dev);
      }
    }
  }, [user]);

  const props: UploadProps = {
    name: 'file',
    showUploadList: false,
    beforeUpload: async (file) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('Você só pode enviar arquivos de imagem!');
        return false;
      }

      try {
        const base64 = await getBase64(file);
        setImageSrc(base64); // Atualiza a visualização da imagem

        // Criar FormData para envio
        const formData = new FormData();
        formData.append('image', file);
        // Chama a API para enviar a imagem
        handleFormSubmit(formData);
        message.success('Imagem enviada com sucesso!');
      } catch {
        message.error('Erro ao processar a imagem.');
      }

      return false; // Evita o upload automático
    },
  };

  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <S.ImageStyled src={imageSrc} />
      </S.ImageWrapper>
      <ImgCrop>
        <Upload {...props}>
          <S.ButtonUpload disabled={isSaving}>
            {isSaving ? 'Enviando...' : 'Atualizar foto'}
          </S.ButtonUpload>
        </Upload>
      </ImgCrop>
    </S.CardContainer>
  );
};
