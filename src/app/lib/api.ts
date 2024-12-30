export interface ISummaryStats {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
}

export interface ISummarySales {
  id: string;
  companyId: string;
  companyTitle: string;
  sold: number;
  income: number;
}

export interface ICountry {
  id: string;
  title: string;
}

export interface ICategory {
  id: string;
  title: string;
}

export enum CompanyStatus {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface ICompany {
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?: string;
}

export interface IPromotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?: string;
}

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getSummaryStats = (init?: RequestInit) => {
  return sendRequest<ISummaryStats>(buildUrl('summary-stats', '1'), init);
};

export const getSummarySales = (init?: RequestInit) => {
  return sendRequest<ISummarySales[]>(buildUrl('summary-sales'), init);
};

export const getCountries = (init?: RequestInit) => {
  return sendRequest<ICountry[]>(buildUrl('countries'), init);
};

export const getCategories = (init?: RequestInit) => {
  return sendRequest<ICategory[]>(buildUrl('categories'), init);
};

export const getCompanies = (init?: RequestInit) => {
  return sendRequest<ICompany[]>(buildUrl('companies'), init);
};

export const getCompany = (id: string, init?: RequestInit) => {
  return sendRequest<ICompany>(buildUrl('companies', id), init);
};

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit,
) => {
  return sendRequest<IPromotion[]>(
    `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
    init,
  );
};
