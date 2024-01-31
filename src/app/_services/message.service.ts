import { Injectable } from '@angular/core';
import { getPaginationHeaders, getPaginationResult } from './PaginationHelper';
import { Message } from '../_models/Message';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getMessages(pageNumber: number, pageSize: number, label: string = "Unread") {
    let httpParams = getPaginationHeaders(pageNumber, pageSize)
    httpParams = httpParams.append('Label', label)

    const url = this.baseUrl + 'messages'

    return getPaginationResult<Message[]>(url, httpParams, this.http)
  }
}
