import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  id: number
  clientName: String,
  iot: String,
  market: String,
  geo: String,
  quarter: String
  squadLaunchDate: String,
  expectedCompletionDate: String
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {
    id: 1,
    clientName: 'ROYAL UPSTREAM',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '10/31/2019',
    expectedCompletionDate: '12/12/2019'
  },
  {
    id: 2,
    clientName: 'ROYAL UPSTREAM',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '10/31/2019',
    expectedCompletionDate: '12/12/2019'
  },
  {
    id: 3,
    clientName: '1ROYAL UPSTREAM',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '10/31/2019',
    expectedCompletionDate: '12/12/2019'
  },
  {
    id: 4,
    clientName: '2ROYAL UPSTREAM',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '10/31/2019',
    expectedCompletionDate: '12/12/2019'
  },
  {
    id: 5,
    clientName: 'ZROYAL UPSTREAM',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '10/31/2019',
    expectedCompletionDate: '12/12/2019'
  },
  {
    id: 6,
    clientName: 'AJROYAL UPSTREAM',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '10/31/2019',
    expectedCompletionDate: '12/12/2019'
  },
  {
    id: 7,
    clientName: 'VODAFONE ZIGGO',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '12/9/2019',
    expectedCompletionDate: '1/20/2020'
  },
  {
    id: 8,
    clientName: 'AVODAFONE ZIGGO',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '12/9/2019',
    expectedCompletionDate: '1/20/2020'
  },
  {
    id: 9,
    clientName: 'QSVODAFONE ZIGGO',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '12/9/2019',
    expectedCompletionDate: '1/20/2020'
  },
  {
    id: 10,
    clientName: 'AMSTERDAM AIRPORT SCHIPHOL',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '11/14/2019',
    expectedCompletionDate: '12/26/2019'
  },
  {
    id: 11,
    clientName: 'SMSTERDAM AIRPORT SCHIPHOL',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '11/14/2019',
    expectedCompletionDate: '12/26/2019'
  },
  {
    id: 12,
    clientName: 'YMSTERDAM AIRPORT SCHIPHOL',
    iot: 'EU',
    market: 'BeNeLux',
    geo: 'US',
    quarter: 'Q1',
    squadLaunchDate: '11/14/2019',
    expectedCompletionDate: '12/26/2019'
  }
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        
        case 'clientName': return compare(a.clientName, b.clientName, isAsc);
        case 'iot': return compare(a.iot, b.iot, isAsc);
        case 'market': return compare(a.market, b.market, isAsc);
        case 'geo': return compare(a.geo, b.geo, isAsc);
        case 'quarter': return compare(a.quarter, b.quarter, isAsc);
        case 'squadLaunchDate': return compare(a.squadLaunchDate, b.squadLaunchDate, isAsc);
        case 'expectedCompletionDate': return compare(a.expectedCompletionDate, b.expectedCompletionDate, isAsc);
        // case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
