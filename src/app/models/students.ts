// Interface, define o modelo de como um objeto do tipo Student deve ser
export interface Student {
  name: string;
  ru: number;
  courseName: string;
  birthday: string;
}

// studentsList então é uma lista de Student, contendo valores fixos de estudantes
// mas claro que em um cenário real, isso seria feito através
// de chamadas e observables. 
export const studentsList: Student[] = [
  { 
      name: 'Pedro Zotesso',
      ru: 3335577,
      courseName: 'Análise e desenvolvimento de sistemas',
      birthday: '30/10/2002',
  },
  {
      name: 'Layne Staley',
      ru: 1248596,
      courseName: 'Música',
      birthday: '22/08/1967',
  },
  {
      name: 'José Roberto',
      ru: 1280654,
      courseName: 'Artes',
      birthday: '05/06/1988',
  },
  {
      name: 'Paula Tande',
      ru: 7947958,
      courseName: 'Matemática',
      birthday: '24/11/1999',
  },
  {
      name: 'Nancy Wilson',
      ru: 6673838,
      courseName: 'História',
      birthday: '16/04/1954',
  }
]