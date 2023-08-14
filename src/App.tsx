import React from "react";
import { Canvas, Rect, Textbox } from "fabric";
import { Box, Button } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useTimer } from "@layerhub-io/use-timer";

function App() {
  const { start, time, pause, reset, setTime } = useTimer();
  const canvasElRef = useRef<HTMLCanvasElement | null>(null);
  const canvasRef = useRef<Canvas | null>(null);
  useEffect(() => {
    canvasRef.current = new Canvas(canvasElRef.current!, {
      width: 900,
      height: 600,
      canvasBackgroundColor: "gray",
    });
  }, []);

  const addRect = React.useCallback(() => {
    if (canvasRef.current) {
      const rect = new Rect({ width: 100, height: 100 });
      canvasRef.current.add(rect);
    }
  }, [canvasRef]);

  const addText = React.useCallback(() => {
    if (canvasRef.current) {
      const text = new Textbox("hello world", { left: 100, top: 100 });
      canvasRef.current.add(text);
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        height={"60px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Button onClick={start}>Start</Button>
          <Button onClick={pause}>Pause</Button>
          <Button onClick={reset}>Reset</Button>
        </Box>
        <Box>{time}</Box>
        <Box>
          <Button onClick={addRect}>Add rect</Button>
          <Button onClick={addText}>Add text</Button>
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: "flex" }}>
        <Box sx={{ flex: 1, background: "#ffffff" }}>
          <canvas ref={canvasElRef} />
        </Box>
        <Box sx={{ flex: 1 }}>Animation controls</Box>
      </Box>
    </Box>
  );
}

export default App;
