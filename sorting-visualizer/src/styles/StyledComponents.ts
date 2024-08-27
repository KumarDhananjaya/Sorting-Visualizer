import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ArrayContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 500px;
  margin-top: 20px;
`;

// Basic bar style
export const ArrayBar = styled(motion.div)<{ height: number }>`
  width: 12px;
  background-color: #3498db;
  margin: 0 2px;
  height: ${({ height }) => height}px;
  transition: height 0.3s ease;
`;

// Gradient bar
export const GradientBar = styled(motion.div)<{ height: number }>`
  width: 12px;
  margin: 0 2px;
  height: ${({ height }) => height}px;
  background: linear-gradient(45deg, #f39c12, #f1c40f);
  transition: height 0.3s ease;
`;

// Rounded bar with different color
export const RoundedBar = styled(motion.div)<{ height: number }>`
  width: 12px;
  margin: 0 2px;
  height: ${({ height }) => height}px;
  background-color: #2ecc71;
  border-radius: 10px;
  transition: height 0.3s ease;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #2ecc71;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #27ae60;
  }
`;

export const AlgorithmInfoContainer = styled(motion.div)`
  margin-top: 20px;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export const AlgorithmHeading = styled(motion.h2)`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
`;

export const AlgorithmSubHeading = styled(motion.h3)`
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 8px;
`;

export const AlgorithmParagraph = styled(motion.p)`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 5px;
`;

export const CodeBlock = styled(motion.pre)`
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 8px;
  font-size: 1rem;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 15px;
`;