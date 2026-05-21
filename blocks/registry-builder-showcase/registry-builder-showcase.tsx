import React, { useState, useMemo } from 'react';
import { UINode } from '../../schema/ui-node';
import { UIRenderer } from '../../schema/renderer';
import { validateTree, ValidationReport, ValidationError } from '../../validation';
import { getRegistryItem, getAllRegistryItems } from '../../registry';
import { LayoutGrid, Layers, Settings, AlertTriangle, CheckCircle, Plus, Trash2 } from 'lucide-react';

// Sample Valid App 1: SaaS Landing Page
const sampleLandingPage: UINode = {
  id: 'app_landing',
  type: 'dashboard_app_shell',
  level: 'app_shell',
  props: { title: 'Acme Corp' },
  children: [
    {
      id: 'page_1',
      type: 'landing_page',
      level: 'page',
      children: [
        {
          id: 'hero_1',
          type: 'hero_section',
          level: 'section',
          props: { headline: 'Build Apps Faster', subtext: 'The best way to ship production-ready apps with AI.' },
          children: [
            { id: 'btn_1', type: 'button', level: 'primitive', props: { title: 'Get Started for Free', color: 'dark' } },
            { id: 'btn_2', type: 'button', level: 'primitive', props: { title: 'View Docs', color: 'light' } }
          ]
        },
        {
          id: 'pricing_1',
          type: 'pricing_section',
          level: 'section',
          children: [
            {
              id: 'grid_1',
              type: 'grid_layout',
              level: 'layout',
              children: [
                { id: 'card_1', type: 'card', level: 'component', props: { title: 'Starter Plan - $0/mo', content: 'Perfect for exploring and building toy projects.' }, children: [
                    { id: 'btn_3', type: 'button', level: 'primitive', props: { title: 'Choose Starter' } }
                ]},
                { id: 'card_2', type: 'card', level: 'component', props: { title: 'Pro Plan - $29/mo', content: 'Everything you need to ship production apps.' }, children: [
                    { id: 'btn_4', type: 'button', level: 'primitive', props: { title: 'Choose Pro', color: 'success' } }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Sample Valid App 2: Mobile Dashboard
const sampleMobileApp: UINode = {
  id: 'app_mobile',
  type: 'mobile_app_shell',
  level: 'app_shell',
  props: { title: 'My Finances' },
  children: [
    {
      id: 'screen_1',
      type: 'home_screen',
      level: 'screen',
      children: [
        {
          id: 'col_1',
          type: 'single_column',
          level: 'layout',
          props: { gap: '1rem', padding: '1rem' },
          children: [
            { id: 'card_bal', type: 'card', level: 'component', props: { title: 'Current Balance' }, children: [
               { id: 'txt_bal', type: 'text', level: 'primitive', props: { content: '$12,450.00' } }
            ]},
            { id: 'list_1', type: 'list', level: 'component', children: [
               { id: 'li_1', type: 'list_item', level: 'component', props: { title: 'Coffee Shop - $4.50' } },
               { id: 'li_2', type: 'list_item', level: 'component', props: { title: 'Grocery Run - $62.10' } },
               { id: 'li_3', type: 'list_item', level: 'component', props: { title: 'Internet Bill - $80.00' } }
            ]}
          ]
        }
      ]
    }
  ]
};

// Sample Valid App 3: Commerce App
const sampleCommerceApp: UINode = {
  id: 'app_commerce',
  type: 'mobile_app_shell',
  level: 'app_shell',
  props: { title: 'Shopping Bag', showHeader: true, showTabs: true },
  children: [
    {
      id: 'screen_commerce',
      type: 'home_screen',
      level: 'screen',
      children: [
        {
          id: 'layout_commerce',
          type: 'single_column',
          level: 'layout',
          props: { padding: '1rem', gap: '1rem' },
          children: [
            { id: 'list_commerce', type: 'list', level: 'component', children: [
               { id: 'item_1', type: 'list_item', level: 'component', props: { title: 'Aesop Hand Balm - $31' } },
               { id: 'item_2', type: 'list_item', level: 'component', props: { title: 'Minimalist Chair - $299' } }
            ]},
            { id: 'btn_checkout', type: 'button', level: 'primitive', props: { title: 'Checkout ($330)', color: 'dark' } }
          ]
        }
      ]
    }
  ]
};

// Sample Valid App 4: Finance App
const sampleFinanceApp: UINode = {
  id: 'app_finance',
  type: 'mobile_app_shell',
  level: 'app_shell',
  props: { title: 'Finance', showHeader: true, showTabs: true },
  children: [
    {
      id: 'screen_finance',
      type: 'home_screen',
      level: 'screen',
      children: [
        {
          id: 'layout_finance',
          type: 'single_column',
          level: 'layout',
          props: { padding: '1rem', gap: '1rem' },
          children: [
             { id: 'card_finance1', type: 'card', level: 'component', props: { title: 'Total Balance', content: '$12,450.00' } },
             { id: 'grid_finance', type: 'grid_layout', level: 'layout', children: [
                { id: 'btn_send', type: 'button', level: 'primitive', props: { title: 'Send' } },
                { id: 'btn_request', type: 'button', level: 'primitive', props: { title: 'Request', color: 'light' } }
             ]}
          ]
        }
      ]
    }
  ]
};

// Sample Valid App 5: Fitness App
const sampleFitnessApp: UINode = {
  id: 'app_fitness',
  type: 'mobile_app_shell',
  level: 'app_shell',
  props: { title: 'Activity', showHeader: true, showTabs: true },
  children: [
    {
      id: 'screen_fitness',
      type: 'home_screen',
      level: 'screen',
      children: [
        {
          id: 'layout_fitness',
          type: 'single_column',
          level: 'layout',
          props: { padding: '1rem', gap: '1rem' },
          children: [
             { id: 'card_fitness1', type: 'card', level: 'component', props: { title: 'Steps Today', content: '8,432 / 10,000' } },
             { id: 'card_fitness2', type: 'card', level: 'component', props: { title: 'Calories Burned', content: '450 kcal' } }
          ]
        }
      ]
    }
  ]
};

// Sample Valid App 6: Social Media App (Complex Tree)
const sampleSocialApp: UINode = {
  id: 'app_social',
  type: 'mobile_app_shell',
  level: 'app_shell',
  props: { title: 'Connect', showHeader: true, showTabs: true },
  children: [
    {
      id: 'screen_feed',
      type: 'home_screen',
      level: 'screen',
      children: [
        {
          id: 'layout_feed',
          type: 'scroll_list_layout',
          level: 'layout',
          props: { direction: 'vertical', showDividers: true },
          children: [
            {
              id: 'card_post1',
              type: 'card',
              level: 'component',
              props: { title: 'Jane Doe', content: 'Just finished a great hike in the mountains! 🏔️' },
              children: [
                { id: 'grid_actions1', type: 'grid_layout', level: 'layout', children: [
                    { id: 'btn_like1', type: 'button', level: 'primitive', props: { title: 'Like', color: 'light' } },
                    { id: 'btn_comment1', type: 'button', level: 'primitive', props: { title: 'Comment', color: 'light' } },
                    { id: 'btn_share1', type: 'button', level: 'primitive', props: { title: 'Share', color: 'light' } }
                ]}
              ]
            },
            {
              id: 'card_post2',
              type: 'card',
              level: 'component',
              props: { title: 'Tech News', content: 'New AI model release drops performance metrics by 10x.' },
              children: [
                { id: 'grid_actions2', type: 'grid_layout', level: 'layout', children: [
                    { id: 'btn_like2', type: 'button', level: 'primitive', props: { title: 'Like', color: 'light' } },
                    { id: 'btn_comment2', type: 'button', level: 'primitive', props: { title: 'Comment', color: 'light' } },
                    { id: 'btn_share2', type: 'button', level: 'primitive', props: { title: 'Share', color: 'light' } }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'screen_profile',
      type: 'profile_screen',
      level: 'screen',
      children: [
        {
          id: 'layout_profile',
          type: 'single_column',
          level: 'layout',
          props: { padding: '1rem', gap: '1rem' },
          children: [
             { id: 'profile_header', type: 'card', level: 'component', props: { title: 'Alex Kim', content: 'Software Engineer & Designer' }, children: [
                { id: 'btn_edit_profile', type: 'button', level: 'primitive', props: { title: 'Edit Profile' } }
             ]},
             { id: 'grid_stats', type: 'grid_layout', level: 'layout', children: [
                { id: 'stat_followers', type: 'card', level: 'component', props: { title: 'Followers', content: '1.2K' } },
                { id: 'stat_following', type: 'card', level: 'component', props: { title: 'Following', content: '340' } }
             ]},
             { id: 'list_recent', type: 'list', level: 'component', children: [
                { id: 'item_recent1', type: 'list_item', level: 'component', props: { title: 'Liked 3 posts recently' } },
                { id: 'item_recent2', type: 'list_item', level: 'component', props: { title: 'Commented on "React V19"' } }
             ]}
          ]
        }
      ]
    }
  ]
};

// Sample Valid App 7: E-Learning Platform (Complex Tree)
const sampleLearningApp: UINode = {
  id: 'app_learning',
  type: 'dashboard_app_shell',
  level: 'app_shell',
  props: { title: 'LearnApp', sidebarVariant: 'drawer' },
  children: [
    {
      id: 'page_courses',
      type: 'dashboard_page',
      level: 'page',
      children: [
        {
          id: 'section_featured',
          type: 'hero_section',
          level: 'section',
          props: { headline: 'Continue Learning', subtext: 'Pick up where you left off in Advanced TypeScript.' },
          children: [
             { id: 'btn_resume', type: 'button', level: 'primitive', props: { title: 'Resume Course', color: 'success' } }
          ]
        },
        {
          id: 'layout_course_grid',
          type: 'two_column',
          level: 'layout',
          children: [
             {
               id: 'col_left',
               type: 'single_column',
               level: 'layout',
               children: [
                  { id: 'card_course1', type: 'card', level: 'component', props: { title: 'React Performance', content: '80% complete' }, children: [
                     { id: 'btn_course1', type: 'button', level: 'primitive', props: { title: 'Go to Course' } }
                  ]}
               ]
             },
             {
               id: 'col_right',
               type: 'single_column',
               level: 'layout',
               children: [
                  { id: 'card_course2', type: 'card', level: 'component', props: { title: 'Node.js Microservices', content: '12% complete' }, children: [
                     { id: 'btn_course2', type: 'button', level: 'primitive', props: { title: 'Go to Course' } }
                  ]}
               ]
             }
          ]
        }
      ]
    }
  ]
};

// Sample Invalid App
const invalidApp: UINode = {
  id: 'app_err',
  type: 'mobile_app_shell',
  level: 'app_shell',
  children: [
    {
      id: 'btn_err',
      type: 'button',
      level: 'primitive', // ERROR: Primitive placed as direct child of app_shell (violates allowed_child_levels likely)
      props: { title: 'Invalid Placement Button' }
    },
    {
      id: 'fake_err',
      type: 'fake_node_does_not_exist',
      level: 'component' // ERROR: Type doesn't exist
    }
  ]
};

const generateId = (type: string) => `${type}_${Math.random().toString(36).substr(2, 5)}`;

export const RegistryBuilderShowcase = () => {
  const [activeSchema, setActiveSchema] = useState<UINode>(sampleLandingPage);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(sampleLandingPage.id);
  const [report, setReport] = useState<ValidationReport | null>(null);
  
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);
  const [dragOverNodeId, setDragOverNodeId] = useState<string | null>(null);

  const registryItems = useMemo(() => getAllRegistryItems(), []);
  const groupedRegistry = useMemo(() => {
    const groups: Record<string, any[]> = {};
    registryItems.forEach(item => {
      const level = item.level;
      if (!groups[level]) groups[level] = [];
      groups[level].push(item);
    });
    return groups;
  }, [registryItems]);

  const handleValidate = (schema: UINode) => {
    const r = validateTree(schema, getRegistryItem);
    setReport(r);
  };

  // Run validation on every schema change
  React.useEffect(() => {
    handleValidate(activeSchema);
  }, [activeSchema]);

  const findNode = (tree: UINode, id: string): UINode | null => {
    if (tree.id === id) return tree;
    if (tree.children) {
      for (const child of tree.children) {
        const found = findNode(child, id);
        if (found) return found;
      }
    }
    return null;
  };

  const updateNode = (tree: UINode, id: string, updater: (node: UINode) => UINode): UINode => {
    if (tree.id === id) return updater({ ...tree });
    if (tree.children) {
      return { ...tree, children: tree.children.map(c => updateNode(c, id, updater)) };
    }
    return tree;
  };

  const deleteNode = (tree: UINode, id: string): UINode | null => {
    if (tree.id === id) return null;
    if (tree.children) {
      const newChildren = tree.children.map(c => deleteNode(c, id)).filter(Boolean) as UINode[];
      return { ...tree, children: newChildren };
    }
    return tree;
  };

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.stopPropagation();
    setDraggedNodeId(id);
    if (e.dataTransfer) {
       e.dataTransfer.effectAllowed = 'move';
       e.dataTransfer.setData('text/plain', id);
    }
  };

  const handleDragOver = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedNodeId && draggedNodeId !== id) {
      setDragOverNodeId(id);
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
    }
  };

  const handleDragLeave = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragOverNodeId === id) {
      setDragOverNodeId(null);
    }
  };

  const handleDrop = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverNodeId(null);
    if (draggedNodeId && draggedNodeId !== id) {
      const sourceNode = findNode(activeSchema, draggedNodeId);
      if (sourceNode && !findNode(sourceNode, id)) {
         const treeWithoutSource = deleteNode(activeSchema, draggedNodeId);
         if (treeWithoutSource) {
            const newTree = updateNode(treeWithoutSource, id, (node) => ({
              ...node,
              children: [...(node.children || []), sourceNode]
            }));
            setActiveSchema(newTree);
         }
      }
    }
    setDraggedNodeId(null);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggedNodeId(null);
    setDragOverNodeId(null);
  };

  const handleAddNode = (registryId: string) => {
    if (!selectedNodeId) return;
    const regItem = getRegistryItem(registryId);
    if (!regItem) return;

    const newNode: UINode = {
      id: generateId(regItem.id),
      type: regItem.id,
      level: regItem.level as any,
      props: regItem.default_props || {}
    };

    setActiveSchema(prev => updateNode(prev, selectedNodeId, (node) => ({
      ...node,
      children: [...(node.children || []), newNode]
    })));
  };

  const handlePropChange = (key: string, value: any) => {
    if (!selectedNodeId) return;
    setActiveSchema(prev => updateNode(prev, selectedNodeId, (node) => ({
      ...node,
      props: { ...(node.props || {}), [key]: value }
    })));
  };

  const selectedNode = selectedNodeId ? findNode(activeSchema, selectedNodeId) : null;
  const selectedRegItem = selectedNode ? getRegistryItem(selectedNode.type) : null;

  const renderTree = (node: UINode, depth: number = 0) => {
    const isSelected = selectedNodeId === node.id;
    const hasErrors = report?.errors.some(e => e.nodeId === node.id);
    const isDragOver = dragOverNodeId === node.id;
    const isDragging = draggedNodeId === node.id;
    
    return (
      <div key={node.id} className="w-full">
        <div 
          draggable
          onDragStart={(e) => handleDragStart(e, node.id)}
          onDragOver={(e) => handleDragOver(e, node.id)}
          onDragLeave={(e) => handleDragLeave(e, node.id)}
          onDrop={(e) => handleDrop(e, node.id)}
          onDragEnd={handleDragEnd}
          onClick={(e) => {
             e.stopPropagation();
             setSelectedNodeId(node.id);
          }}
          className={`flex items-center gap-2 px-2 py-1.5 cursor-pointer rounded-md text-sm transition-colors ${isSelected ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-white/5'} ${hasErrors ? 'border border-red-300 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 text-red-700' : ''} ${isDragOver ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''} ${isDragging ? 'opacity-50' : ''}`}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
        >
          {hasErrors ? <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" /> : <Layers className="w-3.5 h-3.5 opacity-50 shrink-0" />}
          <span className="font-medium truncate">{node.type}</span>
          <span className="text-[10px] opacity-50 px-1 border border-current rounded-sm uppercase tracking-wider shrink-0">{node.level}</span>
        </div>
        {node.children && node.children.length > 0 && (
           <div className={`${isDragOver ? 'ml-2 border-l-2 border-blue-500 bg-blue-50/30 dark:bg-blue-900/10 rounded-b-md' : ''}`}>
             {node.children.map(child => renderTree(child, depth + 1))}
           </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#F2F2F7] dark:bg-black font-sans text-gray-900 dark:text-gray-100">
      
      {/* Topbar */}
      <header className="h-14 bg-white dark:bg-[#1C1C1E] border-b border-gray-200 dark:border-[#38383A] flex items-center justify-between px-4 shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">V2</div>
          <span className="font-semibold tracking-tight">AppMonster Registry Builder</span>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <button onClick={() => { setActiveSchema(sampleLandingPage); setSelectedNodeId(sampleLandingPage.id); }} className="shrink-0 px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 text-sm font-medium transition-colors">Landing Page</button>
          <button onClick={() => { setActiveSchema(sampleMobileApp); setSelectedNodeId(sampleMobileApp.id); }} className="shrink-0 px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 text-sm font-medium transition-colors">Mobile Dashboard</button>
          <button onClick={() => { setActiveSchema(sampleCommerceApp); setSelectedNodeId(sampleCommerceApp.id); }} className="shrink-0 px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 text-sm font-medium transition-colors">Commerce</button>
          <button onClick={() => { setActiveSchema(sampleFinanceApp); setSelectedNodeId(sampleFinanceApp.id); }} className="shrink-0 px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 text-sm font-medium transition-colors">Finance</button>
          <button onClick={() => { setActiveSchema(sampleFitnessApp); setSelectedNodeId(sampleFitnessApp.id); }} className="shrink-0 px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 text-sm font-medium transition-colors">Fitness</button>
          <button onClick={() => { setActiveSchema(sampleSocialApp); setSelectedNodeId(sampleSocialApp.id); }} className="shrink-0 px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 text-sm font-medium transition-colors">Social (Complex)</button>
          <button onClick={() => { setActiveSchema(sampleLearningApp); setSelectedNodeId(sampleLearningApp.id); }} className="shrink-0 px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 text-sm font-medium transition-colors">Learning (Complex)</button>
          <button onClick={() => { setActiveSchema(invalidApp); setSelectedNodeId(invalidApp.id); }} className="shrink-0 px-3 py-1.5 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 text-sm font-medium transition-colors">Invalid Test</button>
        </div>
        <div className="flex items-center gap-2">
           {report?.valid ? (
             <div className="flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-900">
                <CheckCircle className="w-4 h-4" /> Valid Schema
             </div>
           ) : (
             <div className="flex items-center gap-1 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-full border border-red-200 dark:border-red-900">
                <AlertTriangle className="w-4 h-4" /> {report?.errors.length} Errors
             </div>
           )}
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Panel: Registry + Tree */}
        <div className="w-72 bg-white dark:bg-[#1C1C1E] border-r border-gray-200 dark:border-[#38383A] flex flex-col shrink-0">
          
          <div className="flex-1 overflow-y-auto border-b border-gray-200 dark:border-[#38383A] p-3">
             <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Component Registry</div>
             <div className="space-y-4">
                {Object.entries(groupedRegistry).map(([level, items]) => (
                  <div key={level}>
                    <div className="text-[11px] font-semibold text-gray-500 mb-1 px-2 capitalize">{level}s</div>
                    <div className="flex flex-wrap gap-1 px-1">
                      {items.map(item => (
                        <button 
                          key={item.id}
                          onClick={() => handleAddNode(item.id)}
                          className="px-2 py-1 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded text-xs hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-800 transition-colors flex items-center justify-between group flex-1 min-w-[100px]"
                        >
                          <span className="truncate">{item.name}</span>
                          <Plus className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 h-1/2 min-h-[300px]">
             <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Tree View</div>
             <div className="bg-gray-50 dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 p-2 overflow-x-auto">
                {renderTree(activeSchema)}
             </div>
          </div>

        </div>

        {/* Center: Canvas Preview */}
        <div className="flex-1 flex flex-col relative overflow-hidden bg-gray-100 dark:bg-black/50 p-6 ios-scroll">
           <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-sm border border-gray-200 dark:border-gray-800 px-4 py-1.5 text-xs font-medium flex items-center gap-2">
             <LayoutGrid className="w-4 h-4" /> Preview
           </div>
           
           <div className="flex-1 flex justify-center items-start pt-12 overflow-y-auto w-full pb-20">
              <div className="bg-white dark:bg-[#1C1C1E] shadow-2xl overflow-hidden border border-gray-200 dark:border-[#2C2C2E] w-full max-w-5xl rounded-lg min-h-[600px] flex">
                 {/* 
                   We render the dynamic engine inside here.
                   In a real builder we'd inject an interactive wrapper to highlight nodes,
                   but for now we just render it. 
                 */}
                 <div className="flex-1 w-full h-full text-left">
                   <UIRenderer node={activeSchema} />
                 </div>
              </div>
           </div>
        </div>

        {/* Right Panel: Inspector */}
        <div className="w-80 bg-white dark:bg-[#1C1C1E] border-l border-gray-200 dark:border-[#38383A] flex flex-col shrink-0">
           <div className="h-14 border-b border-gray-200 dark:border-[#38383A] flex items-center px-4 shrink-0 font-semibold gap-2">
             <Settings className="w-4 h-4 text-gray-500" /> Inspector
           </div>
           
           <div className="flex-1 overflow-y-auto p-4 space-y-6">
             {selectedNode ? (
               <>
                 <div>
                   <div className="flex items-center justify-between mb-2">
                     <h3 className="font-bold">{selectedNode.type}</h3>
                     <button 
                       onClick={() => {
                         const newTree = deleteNode(activeSchema, selectedNode.id);
                         if (newTree) { setActiveSchema(newTree); setSelectedNodeId(newTree.id); }
                       }}
                       className="p-1 hover:bg-red-100 hover:text-red-600 rounded text-gray-400 transition-colors"
                       title="Delete Node"
                     >
                       <Trash2 className="w-4 h-4" />
                     </button>
                   </div>
                   <div className="text-xs text-gray-500 space-y-1">
                     <div><span className="font-medium mr-1">ID:</span> {selectedNode.id}</div>
                     <div><span className="font-medium mr-1">Level:</span> <span className="uppercase px-1 border rounded">{selectedNode.level}</span></div>
                   </div>
                 </div>

                 {/* Errors */}
                 {report && report.errors.some(e => e.nodeId === selectedNode.id) && (
                   <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg p-3 text-sm text-red-800 dark:text-red-400 space-y-2">
                     <div className="font-bold flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> Validation Errors</div>
                     {report.errors.filter(e => e.nodeId === selectedNode.id).map((err, i) => (
                       <div key={i} className="text-xs">
                         <div className="font-semibold">- {err.code}</div>
                         <div>{err.message}</div>
                         {err.suggestedFix && <div className="mt-1 text-red-600 dark:text-red-500 opacity-80">💡 {err.suggestedFix}</div>}
                       </div>
                     ))}
                   </div>
                 )}

                 {/* Properties */}
                 <div>
                   <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 border-b border-gray-100 dark:border-gray-800 pb-1">Properties</h4>
                   <div className="space-y-3">
                     {/* Dynamic Editor based on default_props */}
                     {selectedRegItem?.default_props && Object.keys(selectedRegItem.default_props).map(key => {
                       const defVal = selectedRegItem.default_props![key];
                       const valType = typeof defVal;
                       const currentVal = selectedNode.props?.[key] ?? defVal;

                       if (valType === 'boolean') {
                         return (
                           <div key={key} className="flex items-center gap-2">
                             <input 
                               type="checkbox"
                               checked={currentVal}
                               onChange={(e) => handlePropChange(key, e.target.checked)}
                               className="w-4 h-4 text-blue-600 rounded bg-gray-50 border-gray-300 dark:bg-black dark:border-gray-700 focus:ring-blue-500"
                             />
                             <label className="text-sm font-medium capitalize">{key}</label>
                           </div>
                         );
                       } else if (valType === 'number') {
                         return (
                           <div key={key}>
                             <label className="block text-xs font-medium mb-1 capitalize">{key}</label>
                             <input 
                               type="number"
                               value={currentVal}
                               onChange={(e) => handlePropChange(key, parseFloat(e.target.value))}
                               className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                             />
                           </div>
                         );
                       } else {
                         return (
                           <div key={key}>
                             <label className="block text-xs font-medium mb-1 capitalize">{key}</label>
                             <input 
                               type="text"
                               value={currentVal}
                               onChange={(e) => handlePropChange(key, e.target.value)}
                               className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                             />
                           </div>
                         );
                       }
                     })}

                     {/* Special case: Add explicit common props if not in default_props */}
                     {['title', 'content', 'label'].map(key => (
                       (selectedNode.props && typeof selectedNode.props[key] === 'string' && (!selectedRegItem?.default_props || !(key in selectedRegItem.default_props))) ? (
                         <div key={"extra_"+key}>
                           <label className="block text-xs font-medium mb-1 capitalize">{key} (Custom)</label>
                           <input 
                             type="text"
                             value={selectedNode.props?.[key] || ''}
                             onChange={(e) => handlePropChange(key, e.target.value)}
                             className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                           />
                         </div>
                       ) : null
                     ))}

                     {/* Color Dropdown */}
                     {['button', 'text', 'badge'].includes(selectedNode.type) && (
                        <div>
                           <label className="block text-xs font-medium mb-1">Theme Color</label>
                           <select 
                             value={selectedNode.props?.color || 'primary'}
                             onChange={(e) => handlePropChange('color', e.target.value)}
                             className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                           >
                             <option value="primary">Primary</option>
                             <option value="secondary">Secondary</option>
                             <option value="success">Success</option>
                             <option value="danger">Danger</option>
                             <option value="warning">Warning</option>
                             <option value="dark">Dark</option>
                             <option value="light">Light</option>
                           </select>
                        </div>
                     )}
                   </div>
                 </div>

                 {/* Rules from Registry */}
                 {selectedRegItem && (
                   <div>
                     <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 border-b border-gray-100 dark:border-gray-800 pb-1">Registry Guidelines</h4>
                     <div className="text-xs space-y-2 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-white/5 rounded p-3">
                       {selectedRegItem.allowed_parents && <div><span className="font-semibold text-gray-900 dark:text-gray-200">Parents:</span> {selectedRegItem.allowed_parents.join(', ')}</div>}
                       {selectedRegItem.allowed_child_levels && <div><span className="font-semibold text-gray-900 dark:text-gray-200">Child Levels:</span> {selectedRegItem.allowed_child_levels.join(', ')}</div>}
                       {selectedRegItem.children_policy && <div><span className="font-semibold text-gray-900 dark:text-gray-200">Children Policy:</span> {selectedRegItem.children_policy}</div>}
                     </div>
                   </div>
                 )}

               </>
             ) : (
               <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-2">
                 <LayoutGrid className="w-8 h-8 opacity-20" />
                 <p className="text-sm">Select a node in the tree</p>
               </div>
             )}
           </div>
        </div>

      </div>
    </div>
  );
};

