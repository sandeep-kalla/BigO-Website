import { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

const nodeTypes = {
  default: ({ data }) => (
    <div className="px-4 py-2 shadow-lg rounded-lg border-2 border-purple-500/30 backdrop-blur-sm
      bg-gradient-to-br from-purple-600/90 to-purple-900/90 hover:from-purple-500/90 hover:to-purple-800/90
      transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/30 hover:-translate-y-1
      text-white font-semibold text-center min-w-[120px]">
      {data.label}
    </div>
  ),
};

const initialNodes = [
  {
    id: '1',
    position: { x: 400, y: 0 },
    data: { label: 'Arrays & Hashing' },
    className: 'animate-glow main-topic',
  },
  {
    id: '2',
    position: { x: 200, y: 100 },
    data: { label: 'Two Pointers' },
    className: 'gradient-node',
  },
  {
    id: '3',
    position: { x: 600, y: 100 },
    data: { label: 'Stack' },
    className: 'gradient-node',
  },
  {
    id: '4',
    position: { x: 100, y: 200 },
    data: { label: 'Binary Search' },
    className: 'gradient-node',
  },
  {
    id: '5',
    position: { x: 300, y: 200 },
    data: { label: 'Sliding Window' },
    className: 'gradient-node',
  },
  {
    id: '6',
    position: { x: 500, y: 200 },
    data: { label: 'Linked List' },
    className: 'gradient-node',
  },
  {
    id: '7',
    position: { x: 400, y: 300 },
    data: { label: 'Trees' },
    className: 'gradient-node main-topic',
  },
  {
    id: '8',
    position: { x: 200, y: 400 },
    data: { label: 'Tries' },
    className: 'gradient-node',
  },
  {
    id: '9',
    position: { x: 400, y: 500 },
    data: { label: 'Heap / Priority Queue' },
    className: 'gradient-node',
  },
  {
    id: '10',
    position: { x: 600, y: 400 },
    data: { label: 'Backtracking' },
    className: 'gradient-node main-topic',
  },
  {
    id: '11',
    position: { x: 200, y: 600 },
    data: { label: 'Intervals' },
    className: 'gradient-node',
  },
  {
    id: '12',
    position: { x: 400, y: 600 },
    data: { label: 'Greedy' },
    className: 'gradient-node',
  },
  {
    id: '13',
    position: { x: 800, y: 500 },
    data: { label: 'Graphs' },
    className: 'gradient-node main-topic',
  },
  {
    id: '14',
    position: { x: 700, y: 600 },
    data: { label: 'Advanced Graphs' },
    className: 'gradient-node',
  },
  {
    id: '15',
    position: { x: 500, y: 700 },
    data: { label: '1-D DP' },
    className: 'gradient-node',
  },
  {
    id: '16',
    position: { x: 700, y: 700 },
    data: { label: '2-D DP' },
    className: 'gradient-node',
  },
  {
    id: '17',
    position: { x: 900, y: 700 },
    data: { label: 'Bit Manipulation' },
    className: 'gradient-node',
  },
  {
    id: '18',
    position: { x: 700, y: 800 },
    data: { label: 'Math & Geometry' },
    className: 'gradient-node',
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e4-7', source: '4', target: '7' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e7-9', source: '7', target: '9' },
  { id: 'e7-10', source: '7', target: '10' },
  { id: 'e9-11', source: '9', target: '11' },
  { id: 'e9-12', source: '9', target: '12' },
  { id: 'e10-13', source: '10', target: '13' },
  { id: 'e13-14', source: '13', target: '14' },
  { id: 'e13-15', source: '13', target: '15' },
  { id: 'e13-16', source: '13', target: '16' },
  { id: 'e13-17', source: '13', target: '17' },
  { id: 'e16-18', source: '16', target: '18' },
];

const defaultEdgeOptions = {
  style: {
    strokeWidth: 3,
    stroke: '#9f7aea',
  },
  animated: true,
  className: 'opacity-90 hover:opacity-100 hover:stroke-[4px] transition-all duration-300 shadow-[0_0_10px_#9f7aea] hover:shadow-[0_0_15px_#9f7aea]',
};

const DSARoadmap = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onInit = useCallback(
    (reactFlowInstance) => {
      reactFlowInstance.fitView();
    },
    []
  );

  return (
    <div className="w-full h-[800px] relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={onInit}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
        className="bg-gradient-to-br from-purple-900/30 to-transparent backdrop-blur-sm border border-purple-500/20 rounded-2xl shadow-xl"
      >
        <Background
          color="#9f7aea"
          variant="dots"
          gap={20}
          size={1}
          className="opacity-30"
        />
        <Controls
          className="bg-purple-900/50 border-purple-500/30 rounded-lg overflow-hidden"
          style={{ button: { width: '24px', height: '24px', borderRadius: '4px' } }}
        />
        <MiniMap
          className="bg-purple-900/50 border-purple-500/30 rounded-lg overflow-hidden"
          nodeColor={(node) => {
            return node.className?.includes('main-topic')
              ? '#d6bcfa'
              : '#9f7aea';
          }}
          maskColor="rgba(107, 70, 193, 0.2)"
        />
      </ReactFlow>
    </div>
  );
};

export default DSARoadmap;