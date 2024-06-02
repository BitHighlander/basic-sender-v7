'use client';
import { Box, Button, Container, Flex, Heading, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import {
  Amount,
  Asset,
  Assets,
  Basic,
  Classic,
  Pioneer,
  Portfolio,
  Swap,
  Transfer,
} from '@coinmasters/pioneer-lib';
import { usePioneer } from "@coinmasters/pioneer-react";
import { useEffect, useState } from 'react';
import { useOnStartApp } from "../utils/onStart";

export default function App() {
  const onStartApp = useOnStartApp();
  const { state } = usePioneer();
  const { app } = state;
  const [selectedAsset, setSelectedAsset] = useState({});
  const [activeTab, setActiveTab] = useState('portfolio');

  useEffect(() => {
    onStartApp();
  }, []);

  useEffect(() => {
    if (app && app.assetContext) setSelectedAsset(app.assetContext);
  }, [app, app?.assetContext]);

  const onClose = () => {
    //console.log("onClose")
  };

  const onSelect = (asset: any) => {
    //console.log("onSelect: ", asset)
  }

  return (
      <>
        <Classic usePioneer={usePioneer}></Classic>
      </>
  );
}
