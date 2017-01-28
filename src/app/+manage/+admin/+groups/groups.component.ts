import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ApiService, User, Group, GroupHasSubjectClient } from '../../../shared/index';
import { ActivatedRoute } from '@angular/router';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { SubjectClient, SubjectPartClient } from '../../../shared/models/index';

/**
 * This class represents the lazy loaded GroupsComponent.
 */
@Component({
  selector: 'sd-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  public loading: boolean = false;
  public errorMessage: string;
  public teachers: Array<User> = new Array<User>();
  public groups: Array<Group> = new Array<Group>();
  public subjects: Array<SubjectClient> = new Array<SubjectClient>();
  public groupHasSubject: GroupHasSubjectClient = new GroupHasSubjectClient();
  public GroupAdded: string;

  constructor(public apiService: ApiService, public route: ActivatedRoute, public overlay: Overlay, public vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
    this.groupHasSubject = new GroupHasSubjectClient();
  }

  ngOnInit() {
    this.getAllGroups();
    this.getAllSubjects();
    this.getAllTeachers();
  }

  public insertGroup() {
    this.GroupAdded = null;
    this.apiService.insertGroupHasSubject(this.groupHasSubject).subscribe(data => {
      this.GroupAdded = 'Vak toegevoegd aan groep.';
      this.groupHasSubject = new GroupHasSubjectClient();
    }, error => {
      this.GroupAdded = null;
      this.errorMessage = error;
    });
  }

  public getAllSubjects() {
    this.apiService.getAllSubjects().subscribe(data => {
      this.subjects = data;
      console.log(this.subjects);
    }, error => {
      this.errorMessage = error;
    });
  }

  public getAllGroups() {
    this.apiService.getGroups().subscribe(data => {
      this.groups = data;
      console.log(this.groups);
    }, error => {
      this.errorMessage = error;
    });
  }

  public getAllTeachers() {
    this.apiService.getAllTeachers().subscribe(data => {
      this.teachers = data;
      console.log(this.teachers);
    }, error => {
      this.errorMessage = error;
    });
  }
}

