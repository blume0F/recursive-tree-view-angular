export interface TreeNode {
  name: string;
  showChildren: boolean;
  children: any[];
  code: string;
  active?: boolean;
}

export const NODES: TreeNode[] = [
  {
    code: 'AFRI',
    name: 'Africa',
    showChildren: false,
    children: [
      {
        code: 'ALGE',
        name: 'Algeria',
        showChildren: false,
        children: [
          {
            code: 'ARIS',
            name: 'Algeris',
            showChildren: false,
            children: [],
          },
          {
            code: 'ACI2',
            name: 'Kazak',
            showChildren: false,
            children: [],
          },
        ],
      },
      {
        code: 'ANGO',
        name: 'Angola',
        showChildren: false,
        children: [],
      },
      {
        code: 'BENI',
        name: 'Benin',
        showChildren: false,
        children: [],
      },
    ],
  },
  {
    code: 'ASIA',
    name: 'Asia',
    showChildren: false,
    children: [
      {
        code: 'AFGH',
        name: 'Afghanistan',
        showChildren: false,
        children: [
          {
            code: 'KABU',
            name: 'Kabul',
            showChildren: false,
            children: [],
          },
        ],
      },
      {
        code: 'ARME',
        name: 'Armenia',
        showChildren: false,
        children: [],
      },
      {
        code: 'AZER',
        name: 'Azerbaijan',
        showChildren: false,
        children: [],
      },
    ],
  },
  {
    code: 'EURO',
    name: 'Europe',
    showChildren: false,
    children: [
      {
        code: 'ROMA',
        name: 'Romania',
        showChildren: false,
        children: [
          {
            code: 'BUCU',
            name: 'Bucuresti',
            showChildren: false,
            children: [],
          },
        ],
      },
      {
        code: 'HUNG',
        name: 'Hungary',
        showChildren: false,
        children: [],
      },
      {
        code: 'BNIN',
        name: 'Benin',
        showChildren: false,
        children: [],
      },
    ],
  },
  {
    code: 'NOAM',
    name: 'North America',
    showChildren: false,
    children: [],
  },
];
